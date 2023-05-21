<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Factory\CategoryFactory;
use App\Factory\CourseFactory;
use App\Factory\QuestionFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Create 10 users
        UserFactory::createMany(10);

        // Create 5 categories
        $categories = CategoryFactory::createMany(5);

        // Create 20 courses and associate them with a random category
        CourseFactory::createMany(10, function () use ($categories) {
            return [
                'categories' => [$this->getRandomCategory($categories)],
            ];
        });

        // Create 40 questions and associate them with a random user
        QuestionFactory::createMany(40, function () {
            return [
                'owner' => UserFactory::random(),
            ];
        });

        $manager->flush();
    }

    private function getRandomCategory(array $categories): Category
    {
        $randomCategory = $categories[array_rand($categories)];
        return $randomCategory->object();
    }

}
