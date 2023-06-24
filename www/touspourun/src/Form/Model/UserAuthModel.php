<?php

namespace App\Form\Model;

use App\Entity\Profil;
use App\Entity\User;
use Symfony\Component\Validator\Constraints as Assert;

class UserAuthModel
{

    #[Assert\NotBlank]
    public ?string $username = null;
    #[Assert\NotBlank]
    public ?string $email = null;
    #[Assert\NotBlank]
    public string $plainPassword;

    #[Assert\NotBlank]
    public ?string $lastname = null;

    #[Assert\NotBlank]
    public ?string $firstname = null;

    #[Assert\NotBlank]
    public ?string $teachingLevel = null;

    #[Assert\NotBlank]
    public ?string $schoolName = null;

    #[Assert\NotBlank]
    public ?string $assoName = null;

    #[Assert\NotBlank]
    public ?string $siret = null;

    #[Assert\NotBlank]
    public ?string $address = null;

    #[Assert\NotBlank]
    public ?string $zipCode = null;

    #[Assert\NotBlank]
    public ?string $city = null;

    #[Assert\NotBlank]
    public ?string $picture = null;

    public ?string $decodedData;

    public bool $agreeTerms;

    public function __construct(?Profil $profil = null, ?User $user = null)
    {
        if($profil){

            $this->lastname = $profil->getLastname();
            $this->firstname = $profil->getFirstname();
            $this->siret = $profil->getSiret();
            $this->zipCode = $profil->getZipCode();
            $this->city = $profil->getCity();
            $this->address = $profil->getAddress();
            $this->assoName = $profil->getAssoName();
            $this->schoolName = $profil->getSchoolName();
            $this->teachingLevel = $profil->getTeachingLevel();
            $this->picture = $profil->getPicture();
        }

        if ($user) {
            $this->username = $user->getUsername();
            $this->email = $user->getEmail();
        }
    }

    public function setPicture(?string $picture): void
    {
        $this->picture = $picture;
        $this->decodedData = base64_decode($picture);

    }

    /**
     * @return string|null
     */
    public function getDecodedData(): ?string
    {
        return $this->decodedData;
    }

}
