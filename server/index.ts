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

  // 404 handler - must be after all routes
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: `Route not found: ${req.method} ${req.path}`,
      error: "The requested API endpoint does not exist",
    });
  });

  // Global error handler - must have 4 parameters and be last
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Server error:", err);
    
    // Don't send response if headers already sent
    if (res.headersSent) {
      return next(err);
    }
    
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal server error",
      error: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  });

  return app;
}
