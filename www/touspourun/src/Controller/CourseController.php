<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Course;
use App\Trait\PictureExtentionTrait;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;


#[Route('/course', name: 'course_')]
class CourseController extends AbstractController {

    use PictureExtentionTrait;

    #[Route('/create', name: 'create', methods: ['GET', 'POST'])]
    public function __invoke(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {
        if($request->isMethod('POST')){


            $course = new Course();

            $course->setTitle($request->request->get('title'))
                   ->setContent($request->request->get('content'))
                   ->setCreatedAt(new \DateTimeImmutable());

            $courseCategoryNames = $request->request->get('categories');


            if (!is_array($courseCategoryNames)) {
                $courseCategoryNames = explode(',', $courseCategoryNames);
            }

            foreach ($courseCategoryNames as $categoryName) {
                $category = $entityManager->getRepository(Category::class)->findOneBy(['name' => $categoryName]);

                if (!$category) {
                    $category = new Category();
                    $category->setName($categoryName);
                    $entityManager->persist($category);
                }

                $course->addCategory($category);
            }

            $pictureFile = $request->files->get('picture');

            if ($pictureFile) {
                $newFilename = $this->uploadFile($pictureFile, $slugger);
                $course->setPicture($newFilename);
            }

            $entityManager->persist($course);

            $entityManager->flush();

            return $this->redirectToRoute('app_course_show');

        }
        return $this->render('course/createCourse.html.twig');

    }
    

    #[Route('/update/{id}', name: '_update')]
    public function edit(): Response

    {
        return $this->render('course/createCourse.html.twig', [

        ]);
    }

}
