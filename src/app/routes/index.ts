import { Router } from 'express';
import { AuthRoutes } from '../modules/User/user.route';
import { ProjectRoutes } from '../modules/Project/project.route';
import { BlogRoutes } from '../modules/Blog/blog.route';
import { SkillRoutes } from '../modules/Skill/skill.route';
import { EducationRoutes } from '../modules/Education/education.route';
import { ExperienceRoutes } from '../modules/Experience/experience.route';
import { ContactRoutes } from '../modules/Contact/contact.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/education',
    route: EducationRoutes,
  },
  {
    path: '/experience',
    route: ExperienceRoutes,
  },
  {
    path: '/contact',
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
