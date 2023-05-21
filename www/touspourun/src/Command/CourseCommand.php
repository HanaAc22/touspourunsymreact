<?php

namespace App\Command;

use App\Entity\Category;
use App\Entity\Course;
use App\Form\Model\CourseFormModel;

class CourseCommand
{
    private Course $course;
    private Category $category;
    private readonly CourseFormModel $courseModel;

    public function __construct(Course $course, CourseFormModel $courseModel, Category $category)
    {
        $this->course = $course;
        $this->category = $category;
        $this->courseModel = $courseModel;
    }

    public function getCategories(): Course
    {
        return $this->course;
    }

    public function getCourses(): Category
    {
        return $this->category;
    }

    public function getCourseModel(): CourseFormModel
    {
        return $this->courseModel;
    }
}