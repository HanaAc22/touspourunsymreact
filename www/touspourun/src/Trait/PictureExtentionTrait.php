<?php

namespace App\Trait;

use App\Form\Model\CourseFormModel;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

trait PictureExtentionTrait {
    private function uploadFile(UploadedFile $file, SluggerInterface $slugger): string
    {
        /**
         * @var  CourseFormModel $courseFormModel
         */
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $slugger->slug($originalFilename);
        $newFilename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

        try {
            $file->move(
                $this->getParameter('images_directory'),
                $newFilename,
            );
        } catch (FileException $e) {
        }

        return $newFilename;
    }
}