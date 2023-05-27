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

            $imageFile = $form->get('picture')->getData();

            if ($imageFile) {
                $newFilename = $this->uploadFile($imageFile, $slugger);
                $course->setPicture($newFilename);
            }

            $title = $form->get('title')->getData();
            if (!empty($title)) {
                $course->setTitle($title);
            } else {
                throw new Exception('Title cannot be empty.');
            }

            $course->setContent($form->get('content')->getData());
            $course->setCreatedAt(new \DateTimeImmutable($form->get('createdAt')->getData()));

            $entityManager->persist($course);
            $entityManager->flush();
        }
        return $this->render('course/createCourse.html.twig', [

        ]);
    }

    #[Route('/update/{id}', name: '_update',)]

    public  function edit(): Response
    {
        return $this->render('courses/course_content/updateContent.html.twig',[

        ]);
    }
}
