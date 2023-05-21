<?php

namespace App\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;

class UserAuthModel{

    #[Assert\NotBlank]
    public ?string $username = null;
    #[Assert\NotBlank]
    public ?string $email = null;
    #[Assert\NotBlank]
    public string $plainPassword;

    public bool $agreeTerms;

}