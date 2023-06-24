<?php

namespace App\Tests\Unit;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserTest extends KernelTestCase
{
    private const mail_msg_error = "l\'email <test-mail@test n\'est pas valide.";
    private const validEmailValue = "test-mail@test.fr";
    private const pwValidValue = "Test12345678!";
    private $validator;

    public function setUp(): void
    {
        parent::setUp();
        self::bootKernel();
        $this->validator = self::getContainer()->get(ValidatorInterface::class);
    }

    public function testUserEntityIsValid(): void
    {
        $user = new User();

        $user->setEmail(self::validEmailValue)
            ->setPassword(self::pwValidValue);
        
            $this->getValidationErrors($user, 0);
    }

    public function testUserInvalidEmail (): void
    {
        $user = new User();

        $user->setPassword(self::pwValidValue);
        
        $errors = $this->getValidationErrors($user, 1);

            $this->assertEquals(self::mail_msg_error, $errors[0]->getMessage());
    }

    private function getValidationErrors(User $user, int $numberOfExpectedErrors) : ConstraintViolationList
    {
        $errors = $this->validator->validate($user);
        $this->assertCount($numberOfExpectedErrors, $errors);
        return $errors;
    }
}
