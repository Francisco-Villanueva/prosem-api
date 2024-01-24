import {
	Table,
	Column,
	Model,
	ForeignKey,
	BelongsTo,
} from 'sequelize-typescript'
import { Company } from 'src/company/schema/company.model'
@Table
export class User extends Model<User> {
	@ForeignKey(() => Company)
	@Column({ field: 'companyId' })
	companyId: number
	@BelongsTo(() => Company)
	company: Company
	@Column
	tenantId: string
	@Column
	name: string
	@Column({ defaultValue: undefined })
	role: string | undefined
	@Column
	lastName: string
	@Column({ unique: true })
	email: string
	@Column({ unique: true })
	userName: string
	@Column({ unique: true })
	password: string
	@Column
	image: string
}
