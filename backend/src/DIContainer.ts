import { Container } from 'inversify'
import { CalendarRepository } from './repositories/CalendarRepository'
import { CampusRepository } from './repositories/CampusRepository'
import { ClasseRepository } from './repositories/ClassesRepository'
import { CoursesRepository } from './repositories/CoursesRepository'
import { CurrentsemesterRepository } from './repositories/CurrentsemesterRepository'
import { DisciplineRepository } from './repositories/DisciplineRepository'
import { NoteFoulsRepository } from './repositories/NoteFoulsRepository'
import { ProfessorRepository } from './repositories/ProfessorRepository'
import { ProfileRepository } from './repositories/ProfileRepository'
import { RegistryRepository } from './repositories/RegistryRepository'
import { RuleRepository } from './repositories/RuleRepository'
import { StudentsRepository } from './repositories/StudentRepository'
import { UserRepository } from './repositories/UserRepository'
import { CalendarService } from './services/CalendarService'
import { CampusService } from './services/CampusService'
import { ClassesService } from './services/ClassesService'
import { CourseService } from './services/CoursesService'
import { CurrentsemesterService } from './services/CurrentsemesterService'
import { DisciplineService } from './services/DisciplineService'
import { NoteFoulsService } from './services/NoteFoulsService'
import { ProfessorService } from './services/ProfessorService'
import { ProfileService } from './services/ProfileService'
import { RegistryService } from './services/RegistryService'
import { RuleService } from './services/RuleService'
import { StudentService } from './services/StudentService'
import { UserService } from './services/UserService'

export const DIContainer = new Container()

/**
 * Container REPOSITORIES configuration binding
 */
DIContainer.bind<UserRepository>(UserRepository).toSelf()
DIContainer.bind<RuleRepository>(RuleRepository).toSelf()
DIContainer.bind<ProfileRepository>(ProfileRepository).toSelf()
DIContainer.bind<StudentsRepository>(StudentsRepository).toSelf()
DIContainer.bind<CoursesRepository>(CoursesRepository).toSelf()
DIContainer.bind<ClasseRepository>(ClasseRepository).toSelf()
DIContainer.bind<CurrentsemesterRepository>(CurrentsemesterRepository).toSelf()
DIContainer.bind<NoteFoulsRepository>(NoteFoulsRepository).toSelf()
DIContainer.bind<ProfessorRepository>(ProfessorRepository).toSelf()
DIContainer.bind<RegistryRepository>(RegistryRepository).toSelf()
DIContainer.bind<DisciplineRepository>(DisciplineRepository).toSelf()
DIContainer.bind<CampusRepository>(CampusRepository).toSelf()
DIContainer.bind<CalendarRepository>(CalendarRepository).toSelf()
/**
 * Container SERVICES configuration binding
 */
DIContainer.bind<StudentService>(StudentService).toSelf()
DIContainer.bind<ProfileService>(ProfileService).toSelf()
DIContainer.bind<RuleService>(RuleService).toSelf()
DIContainer.bind<UserService>(UserService).toSelf()
DIContainer.bind<CourseService>(CourseService).toSelf()
DIContainer.bind<ClassesService>(ClassesService).toSelf()
DIContainer.bind<CurrentsemesterService>(CurrentsemesterService).toSelf()
DIContainer.bind<NoteFoulsService>(NoteFoulsService).toSelf()
DIContainer.bind<ProfessorService>(ProfessorService).toSelf()
DIContainer.bind<RegistryService>(RegistryService).toSelf()
DIContainer.bind<DisciplineService>(DisciplineService).toSelf()
DIContainer.bind<CampusService>(CampusService).toSelf()
DIContainer.bind<CalendarService>(CalendarService).toSelf()
