<?php

namespace App\Controller;

use App\Entity\Course;
use App\Trait\PictureExtentionTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;


#[Route('/course', name: 'course_')]
class CourseController extends AbstractController
{
    use PictureExtentionTrait;

    #[Route('/create', name: 'create', methods: ['GET', 'POST'])]
    public function __invoke(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {
        if($request->isMethod('POST')){
            $course = new Course();
            $course->setTitle($request->request->get('title'));
            $course->setContent($request->request->get('content'));

            $pictureFile = $request->files->get('picture');
            if ($pictureFile) {
                $newFilename = $this->uploadFile($pictureFile, $slugger);
                $course->setPicture($newFilename);
            }

            $course->setCreatedAt(new \DateTimeImmutable());

            $entityManager->persist($course);
            $entityManager->flush();
        }
        return $this->render('course/createCourse.html.twig');
    }

    #[Route('/update/{id}', name: '_update')]
    public  function edit(): Response
    {
        return $this->render('course/createCourse.html.twig', [

        ]);
    }

}
