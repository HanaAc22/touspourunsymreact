<?php

namespace App\Controller;

use App\Entity\Course;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/course', name: 'app_course_')]
class ShowCourseController extends AbstractController
{
//    #[isGranted('ROLE_USER')]
    #[Route('/show', name: 'show', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('blog/index.html.twig');
    }

    #[Route('/show/{id}', name: 'show_id', methods: ['GET'])]
    public function __invoke(EntityManagerInterface $entityManager, int $id): Response
    {
        $course = $entityManager->getRepository(Course::class)->find($id);

        return $this->render('blog/show.html.twig',[
            'course' => $course,
        ]);
    }
}
