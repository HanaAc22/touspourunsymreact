<?php

namespace App\Controller;

use App\Command\CourseCommand;
use App\Entity\Category;
use App\Entity\Course;
use App\Form\CourseType;
use App\Form\Model\CourseFormModel;
use App\Trait\PictureExtentionTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/course', name: 'course_')]
class CourseController extends AbstractController
{
    use PictureExtentionTrait;
    #[Route('/create', name: 'create')]
    public function create(SluggerInterface $slugger, Request $request, MessageBusInterface $messageBus): Response
    {
        $form = $this->createForm(CourseType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $course = new Course();
            $category = new Category();

            $courseModel = $form->getData();
            // dd($courseModel)
            $picture = $form->get('picture')->getData();

            if ($picture) {
                $newFilename = $this->uploadFile($picture, $slugger);
                $course->setPicture($newFilename);
            }

            $messageBus->dispatch(new CourseCommand($course, $courseModel, $category));

            return $this->redirectToRoute('app_main');
        }
        return $this->render('course/createCourse.html.twig', [
            'contentCreateForm' => $form->createView(),
        ]);
    }

    #[Route('/update/{id}', name: '_update')]
    public  function edit($id, Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger ,MessageBusInterface $messageBus): Response
    {
        $course = $entityManager->getRepository(Course::class)->find($id);

        $courseModel = new CourseFormModel($course);
        $caregory = new Category();

        $form = $this->createForm(CourseType::class, $courseModel);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $form->getData();

            $imageFile = $form->get('picture')->getData();

            if ($imageFile) {
                $newFilename = $this->uploadFile($imageFile, $slugger);
                $course->setPicture($newFilename);
            }

            $messageBus->dispatch(new CourseCommand($course, $courseModel, $caregory));

            return new Response('course created with success');
        }

        return $this->render('courses/course_content/updateContent.html.twig',[
            'updateContentForm' => $form->createView(),
        ]);
    }
}
