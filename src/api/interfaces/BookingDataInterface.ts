import type { DoctorInterface, ClinicInterface, Patient } from '~/EastclinicVueApi';
export default interface BookingDataInterface {
  patient: Patient|null
  slot: number|null
  clinic: ClinicInterface|null
  doctor: DoctorInterface|null
  sessionId: string|null,
  type: string|null
}
