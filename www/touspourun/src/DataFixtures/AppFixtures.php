<?php

namespace App\DataFixtures;

use App\Factory\QuestionFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        UserFactory::createMany(10);
        // load the user first than add a function as second argument that return a random UserFactory
        QuestionFactory::createMany(40, function () {
            return [
                'owner' => UserFactory::random(),
            ];
        });
        $manager->flush();
    }
}
