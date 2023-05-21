<?php

namespace App\Factory;

use App\Entity\Course;
use App\Repository\CourseRepository;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Monolog\DateTimeImmutable;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Course>
 *
 * @method        Course|Proxy create(array|callable $attributes = [])
 * @method static Course|Proxy createOne(array $attributes = [])
 * @method static Course|Proxy find(object|array|mixed $criteria)
 * @method static Course|Proxy findOrCreate(array $attributes)
 * @method static Course|Proxy first(string $sortedField = 'id')
 * @method static Course|Proxy last(string $sortedField = 'id')
 * @method static Course|Proxy random(array $attributes = [])
 * @method static Course|Proxy randomOrCreate(array $attributes = [])
 * @method static CourseRepository|RepositoryProxy repository()
 * @method static Course[]|Proxy[] all()
 * @method static Course[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Course[]|Proxy[] createSequence(iterable|callable $sequence)
 * @method static Course[]|Proxy[] findBy(array $attributes)
 * @method static Course[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static Course[]|Proxy[] randomSet(int $number, array $attributes = [])
 */
final class CourseFactory extends ModelFactory implements DependentFixtureInterface
{

    public function __construct()
    {
        parent::__construct();
    }

    protected function getDefaults(): array
    {
        return [
            'content' => self::faker()->realText(),
            'picture' => self::faker()->text(),
            'title' => self::faker()->text(255),
            'createdAt' => DateTimeImmutable::createFromMutable(self::faker()->dateTime('now')),
        ];
    }

    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Course $course): void {})
        ;
    }

    public function getDependencies(): array
    {
        return [
            CategoryFactory::class,
        ];
    }
    protected static function getClass(): string
    {
        return Course::class;
    }
}
