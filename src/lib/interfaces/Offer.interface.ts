export interface OfferApiItemExtends {
	title: string;
	id: string;
	state: number;
	creationDate: string;
	updateDate: string;
	city: string;
	externalUrlForm: string;
	blocked: boolean;
	applications: number;
	province: Category;
	experienceMin: Category;
	category: Category;
	subcategory: Category;
	studiesMin: Category;
	residence: Category;
	country: Category;
	contractType: Category;
	journey: Category;
	subSegment: number;
	profile: Profile;
	cityPD: number;
	zipCode: string;
	latitude: number;
	longitude: number;
	exactLocation: boolean;
	department: string;
	vacancies: number;
	minRequirements: string;
	description: string;
	desiredRequirements: string;
	commissions: string;
	contractDuration: string;
	referenceId: string;
	detailedStudiesId: number;
	studying: boolean;
	showPay: boolean;
	multiProvince: boolean;
	maxPay: Pay;
	minPay: Pay;
	schedule: string;
	jobLevel: Category;
	staffInCharge: Category;
	hasKillerQuestions: number;
	hasOpenQuestions: number;
	upsellings: Upsellings;
	epreselec: boolean;
	fiscalAddress: string;
	shouldAskExportConsent: boolean;
	exportConsentName: string;
	link: string;
	active: boolean;
	archived: boolean;
	deleted: boolean;
	disponibleForFullVisualization: boolean;
	availableForVisualization: boolean;
	skillsList: SkillItem[];
	salaryDescription: string;
}

export interface Category {
	id: number;
	value: string;
}

export interface Pay {
	amount: number;
	amountId: number;
	periodId: number;
	periodValue: string;
	amountValue: string;
}

export interface Profile {
	id: string;
	name: string;
	description: string;
	province: Category;
	web: string;
	numberWorkers: number;
	url: string;
	corporateWebsiteUrl: string;
	websiteUrl: string;
	hidden: boolean;
	typeIndustry: Category;
	country: Category;
	corporateResponsive: boolean;
	showCorporativeHeader: boolean;
	clientId: number;
	followable: boolean;
	logoUrl?: string;
}

export interface SkillItem {
	skill: string;
}

export interface Upsellings {
	highlightHomeMonth: boolean;
	highlightHomeWeek: boolean;
	highlightSubcategory: boolean;
	highlightLogo: boolean;
	highlightColor: boolean;
	highlightUrgent: boolean;
	highlightStandingOffer: boolean;
}

export interface ResponseOffersList {
	currentPage: number;
	pageSize: number;
	totalResults: number;
	currentResults: number;
	totalPages: number;
	availableSortingMethods: string[];
	sortBy: string;
	sinceDate: string;
	items: OfferApiItem[];
}

export interface OfferApiItem {
	id: string;
	title: string;
	province: Category;
	city: string;
	link: string;
	category: Category;
	contractType: Category;
	subcategory: Category;
	salaryMin: Category;
	salaryMax: Category;
	salaryPeriod: Category;
	experienceMin: Category;
	workDay: Category;
	study: Category;
	teleworking: Category;
	published: Date;
	updated: Date;
	author: Author;
	requirementMin: string;
	bold: boolean;
	applications: string;
	subSegment: number;
	executive: boolean;
	salaryDescription: string;
	multiProvince: boolean;
	urgent: boolean;
	color: boolean;
}

export interface Author {
	id: string;
	privateId: number;
	name: string;
	uri: string;
	corporateResponsive: boolean;
	showCorporativeHeader: boolean;
	logoUrl?: string;
}

export interface Category {
	id: number;
	value: string;
}

export interface OfferItemAdapter {
	id: string;
	position: string;
	company: CompanyOffer;
	published: Date;
	city: string;
	logoUrl?: string;
}

export interface OfferModel {
	id: string;
	company: CompanyOffer;
	published: Date;
	updatedAt: string;
	position: string;
	seniority?: string;
	contractType: string;
	tags?: string[];
	jobDescription: string;
	minRequirements: string;
	skills: string[];
	salaryDescription: string;
	city: string;
}


export interface CompanyOffer {
	id: string;
	description?: string;
	name?: string;
	logo?: string;
	uri?: string;
	web?: string;
}