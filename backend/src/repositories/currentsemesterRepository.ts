import { semesterTable } from '../database/common/semesterTable'
import { noteFoulsTableName } from '../database/common/noteFoulsTable'
import { knex } from '../database/knex/dbConnection'
import { ICurrentSemesterDto } from '../domain/interfaces/contracts/ICurrentSemesterDto'
import { ICurrentSemester } from '../domain/interfaces/entities/ICurrentSemester'
import { AbstractRepository } from './AbstractRepository'

export class CurrentsemesterRepository extends AbstractRepository<ICurrentSemester> {
    protected readonly table = semesterTable

    getSemester = async ():Promise<ICurrentSemesterDto[]> => await knex(semesterTable)
      .innerJoin(`${noteFoulsTableName} as nf`, 't1.id', 'nf.semester')
      .select('t1.id')
}
