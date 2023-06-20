<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Course;
<<<<<<< HEAD
=======
use App\Form\CourseType;
>>>>>>> sarah
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
<<<<<<< HEAD

    #[Route('/create', name: 'create', methods: ['GET', 'POST'])]
    public function __invoke(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {
        if($request->isMethod('POST')){
=======
    
    #[Route('/create', name: 'create', methods: ['GET', 'POST'])]
    public function __invoke(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger ): Response
    {
        if ($request->isMethod('POST')) {
>>>>>>> sarah

            $course = new Course();

            $course->setTitle($request->request->get('title'))
                   ->setContent($request->request->get('content'))
                   ->setCreatedAt(new \DateTimeImmutable());
<<<<<<< HEAD

            $courseCategoryNames = $request->request->get('categories');

=======
            $courseCategoryNames = $request->request->get('categories');

>>>>>>> sarah
            if (!is_array($courseCategoryNames)) {
                $courseCategoryNames = explode(',', $courseCategoryNames);
            }

            foreach ($courseCategoryNames as $categoryName) {
<<<<<<< HEAD
                $category = $entityManager->getRepository(Category::class)->findOneBy(['name' => $categoryName]);
=======
                $category =$entityManager->getRepository(Category::class)->findOneBy(['name' => $categoryName]);
>>>>>>> sarah

                if (!$category) {
                    $category = new Category();
                    $category->setName($categoryName);
                    $entityManager->persist($category);
                }

                $course->addCategory($category);
<<<<<<< HEAD
            }

            $pictureFile = $request->files->get('picture');

=======

            }

            $pictureFile = $request->files->get('picture');
            
>>>>>>> sarah
            if ($pictureFile) {
                $newFilename = $this->uploadFile($pictureFile, $slugger);
                $course->setPicture($newFilename);
            }

            $entityManager->persist($course);
<<<<<<< HEAD

            $entityManager->flush();

            return $this->redirectToRoute('app_course_show');

        }
        return $this->render('course/createCourse.html.twig');
=======
            $entityManager->flush();
            return $this->redirectToRoute('app_course_show');
        }

        return $this->render('course/createCourse.html.twig');    
>>>>>>> sarah
    }
    

    #[Route('/update/{id}', name: '_update')]
<<<<<<< HEAD
    public function edit(): Response
=======
    public  function edit(): Response
>>>>>>> sarah
    {
        return $this->render('course/createCourse.html.twig', [

        ]);
    }

}
