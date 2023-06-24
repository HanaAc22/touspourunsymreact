<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProfilRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * 
 */
#[ORM\Entity(repositoryClass: ProfilRepository::class)]
#[ApiResource]
class Profil
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\NotBlank]
    #[Assert\Regex(
        pattern: '/^[a-zA-Z-]\d+$/i',
        htmlPattern: '^[a-zA-Z-]\d+$',
        match: false,
        message: 'votre prénom ne doit pas contenir de chiffre',
    )]
    #[ORM\Column(length: 100, nullable: true)]
    private ?string $firstname = null;

    #[Assert\Regex(
        pattern: '/^[a-zA-Z-]\d+$/i',
        htmlPattern: '^[a-zA-Z-]\d+$',
        match: false,
        message: 'votre prénom ne doit pas contenir de chiffre',
    )]
    #[Assert\NotBlank]
    #[ORM\Column(length: 100, nullable: true)]
    private ?string $lastname = null;

    #[Assert\Regex(
        pattern: '/^[a-zA-Z0-9-_.]$/i',
        htmlPattern: '^[a-zA-Z0-9-_.]$',
    )]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $picture = null;

    #[Assert\Regex(
        pattern: '/^[0-9]$/',
        htmlPattern: '^[0-9]$',
    )]
    #[Assert\Length(
        min: 5,
        max: 5,
        minMessage: 'Veuillez enseigner les 5 chiffres du département',
        maxMessage: 'Veuillez enseigner les 5 chiffres du département',
    )]
    #[ORM\Column(length: 5, nullable: true)]
    private ?string $zipCode = null;

    #[Assert\Regex(
        pattern: '/^[0-9]{14}$/',
        htmlPattern: '^[0-9]{14}$',
    )]
    #[Assert\Length(
        min: 14,
        max: 14,
        minMessage: 'Veuillez enseigner les 14 chiffres composant votre N° SIRET',
        maxMessage: 'Veuillez enseigner les 14 chiffres composant votre N° SIRET',
    )]
    #[ORM\Column(length: 14, nullable: true)]
    private ?string $siret = null;

    #[Assert\Regex(
        pattern: '/^[a-zA-Z0-9-_.!?* ]$/',
        htmlPattern: '^[a-zA-Z0-9-_.!?* ]$',
    )]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $assoName = null;

    #[Assert\Regex(
        pattern: '/^[a-zA-Z0-9 ]$/',
        htmlPattern: '^[a-zA-Z0-9-_.!?* ]$',
    )]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $address = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $city = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $schoolName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $teachingLevel = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getZipCode(): ?string
    {
        return $this->zipCode;
    }

    public function setZipCode(?string $zipCode): self
    {
        $this->zipCode = $zipCode;

        return $this;
    }

    public function getSiret(): ?string
    {
        return $this->siret;
    }

    public function setSiret(?string $siret): self
    {
        $this->siret = $siret;

        return $this;
    }

    public function getAssoName(): ?string
    {
        return $this->assoName;
    }

    public function setAssoName(?string $assoName): self
    {
        $this->assoName = $assoName;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getSchoolName(): ?string
    {
        return $this->schoolName;
    }

    public function setSchoolName(?string $schoolName): self
    {
        $this->schoolName = $schoolName;

        return $this;
    }

    public function getTeachingLevel(): ?string
    {
        return $this->teachingLevel;
    }

    public function setTeachingLevel(?string $teachingLevel): self
    {
        $this->teachingLevel = $teachingLevel;

        return $this;
    }
}
