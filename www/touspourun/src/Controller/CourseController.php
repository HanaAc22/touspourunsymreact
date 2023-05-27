<?php

namespace App\Controller;

use App\Entity\Course;
use App\Form\CourseType;
use App\Trait\PictureExtentionTrait;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/course', name: 'course_')]
class CourseController extends AbstractController
{
    use PictureExtentionTrait;
    /**
     * @throws Exception
     */
    #[Route('/create', name: 'create', methods: ['GET', 'POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger ): Response
    {
        $form = $this->createForm(CourseType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $course = new Course();

            $courseModel = $form->getData();
            $picture = $form->get('picture')->getData();

            if ($picture) {
                $newFilename = $this->uploadFile($picture, $slugger);
                $course->setPicture($newFilename);
            }

            return $this->redirectToRoute('app_main');
        }
        return $this->render('course/createCourse.html.twig', [
            'contentCreateForm' => $form->createView(),
        ]);
    }

    #[Route('/update/{id}', name: '_update')]
    public  function edit(): Response
    {
        return $this->render('course/createCourse.html.twig', [

        ]);
    }

}
