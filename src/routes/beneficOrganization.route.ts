import express from 'express'
import { createBeneficOrganization, deleteBeneficOrganization, getBeneficOrganizationById, getBeneficOrganizations, updateBeneficOrganization } from '../controllers/beneficOrganization.controller'

const router = express.Router()

router.get('/', getBeneficOrganizations)
router.get('/:id', getBeneficOrganizationById)
router.post('/', createBeneficOrganization)
router.put('/:id', updateBeneficOrganization)
router.delete('/:id', deleteBeneficOrganization)

export default router