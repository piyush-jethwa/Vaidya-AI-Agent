import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

// Import new route handlers
import { 
  getDoctors, 
  loginDoctor, 
  loginPatient, 
  registerPatient, 
  getPatientProfile, 
  getDoctorProfile 
} from "./routes/users";

import { 
  bookAppointment, 
  getDoctorDashboard, 
  getPatientDashboard, 
  updateAppointmentStatus, 
  getAppointment, 
  getAllAppointments 
} from "./routes/appointments";

import { 
  analyzeSymptoms, 
  handleContactForm, 
  getHealthTips 
} from "./routes/symptom-checker";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // User management routes
  app.get("/api/doctors", getDoctors);
  app.post("/api/auth/login/doctor", loginDoctor);
  app.post("/api/auth/login/patient", loginPatient);
  app.post("/api/auth/register/patient", registerPatient);
  app.get("/api/patients/:patientId", getPatientProfile);
  app.get("/api/doctors/:doctorId", getDoctorProfile);

  // Appointment management routes
  app.post("/api/appointments", bookAppointment);
  app.get("/api/appointments", getAllAppointments);
  app.get("/api/appointments/:appointmentId", getAppointment);
  app.put("/api/appointments/:appointmentId/status", updateAppointmentStatus);
  
  // Dashboard routes
  app.get("/api/dashboard/doctor/:doctorId", getDoctorDashboard);
  app.get("/api/dashboard/patient/:patientId", getPatientDashboard);

  // Symptom checker and AI routes
  app.post("/api/symptom-checker/analyze", analyzeSymptoms);
  app.get("/api/health-tips", getHealthTips);

  // Contact and utility routes
  app.post("/api/contact", handleContactForm);

  return app;
}
