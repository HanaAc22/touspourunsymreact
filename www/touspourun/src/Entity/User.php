<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Put;
use App\Controller\RegistrationController;
use App\Controller\SecurityController;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['email'], message: 'Ce compte existe déjà avec cet email, veuillez vous identifier')]
#[ApiResource( operations: [
    new Post(controller : RegistrationController::class),
    new Get(controller: SecurityController::class),
    new GetCollection(),
    new Put(),
    new Delete(),
])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */

    #[ORM\Column]
    private ?string $password = null;

    #[Assert\Regex(
        pattern: '/\d/',
        match: false,
        message: 'Votre nom ne doit pas contenir de chiffre',
    )]
    #[ORM\Column(length: 100)]
    private ?string $firstname = null;

    #[Assert\Regex(
        pattern: '/\d/',
        match: false,
        message: 'Votre nom ne doit pas contenir de chiffre',
    )]
    #[ORM\Column(length: 100)]
    private ?string $lastname = null;

    #[ORM\Column(length: 255)]
    #[Groups(['user:read', 'user:write', 'user:edit'])]
    private ?string $picture = null;

    #[ORM\Column(length:5)]
    private ?string $zipCode = null;

    #[ORM\Column(length:14)]
    private ?string $siret = null;

    #[ORM\Column(length: 255)]
    private ?string $assoName = null;

    #[ORM\Column(length: 255)]
    private ?string $adress = null;

    #[ORM\Column(length: 255)]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    private ?string $schoolName = null;

    #[ORM\Column(length: 255)]
    private ?string $teachingLevel = null;


    #[ORM\OneToMany(mappedBy: 'owner', targetEntity: Question::class, cascade: ['persist'], orphanRemoval: true)]
    #[Assert\Valid]
    private Collection $questions;

    public function __construct()
    {
        $this->questions = new ArrayCollection();
    }

    #[ORM\Column(length: 255, unique: true)]
    private ?string $username = null;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getUsername(): ?string
    {
        return $this->username;
    }

    /**
     * @param string|null $username
     */
    public function setUsername(?string $username): void
    {
        $this->username = $username;
    }

    /**
     * @return string|null
     */
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    /**
     * @param string|null $username
     */
    public function setFirstname(?string $firstname): void
    {
        $this->firstname = $firstname;
    }

    /**
     * @return string|null
     */
    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    /**
     * @param string|null $username
     */
    public function setLastname(?string $lastname): void
    {
        $this->lastname = $lastname;
    }

    /**
     * @see UserInterface
     */
    public function getPicture(): ?string
    {
        return $this->picture;
    }

    /**
     * @see UserInterface
     */
    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getZipCode(): ?string
    {
        return $this->zipCode;
    }

    /**
     * @param string|null $username
     */
    public function setZipCode(?string $zipCode): void
    {
        $this->zipCode = $zipCode;
    }

    /**
     * @return string|null
     */
    public function getSiret(): ?string
    {
        return $this->siret;
    }

    /**
     * @param string|null $username
     */
    public function setSiret(?string $siret): void
    {
        $this->siret = $siret;
    }

    /**
     * @return string|null
     */
    public function getAssoName(): ?string
    {
        return $this->assoName;
    }

    /**
     * @param string|null $username
     */
    public function setAssoName(?string $assoName): void
    {
        $this->assoName = $assoName;
    }


    /**
     * @return string|null
     */
    public function getAdress(): ?string
    {
        return $this->adress;
    }

    /**
     * @param string|null $username
     */
    public function setAdress(?string $adress): void
    {
        $this->adress = $adress;
    }

    /**
     * @return string|null
     */
    public function getCity(): ?string
    {
        return $this->city;
    }

    /**
     * @param string|null $username
     */
    public function setCity(?string $city): void
    {
        $this->city = $city;
    }

    /**
     * @return string|null
     */
    public function getSchoolName(): ?string
    {
        return $this->schoolName;
    }

    /**
     * @param string|null $username
     */
    public function setSchoolName(?string $schoolName): void
    {
        $this->schoolName = $schoolName;
    }

     /**
     * @return string|null
     */
    public function getTeachingLevel(): ?string
    {
        return $this->teachingLevel;
    }

    /**
     * @param string|null $username
     */
    public function setTeachingLevel(?string $teachingLevel): void
    {
        $this->teachingLevel = $teachingLevel;
    }


    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection<int, Question>
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): self
    {
        if (!$this->questions->contains($question)) {
            $this->questions->add($question);
            $question->setOwner($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->questions->removeElement($question)) {
            // set the owning side to null (unless already changed)
            if ($question->getOwner() === $this) {
                $question->setOwner(null);
            }
        }

        return $this;
    }
}
