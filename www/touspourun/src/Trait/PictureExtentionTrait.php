<?php

namespace App\Trait;

use App\Entity\Course;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

trait PictureExtentionTrait {
    private function uploadFile(UploadedFile $file, SluggerInterface $slugger): string
    {
        /**
         * @var  Course $course
         */
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $slugger->slug($originalFilename);
        $newFilename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

        try {
            $file->move(
                $this->getParameter('kernel.project_dir') . '/public/uploads/images',
                $newFilename,
            );
        } catch (FileException $e) {
            
        }

        return $newFilename;
    }
}