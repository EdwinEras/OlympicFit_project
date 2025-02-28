"use client";

import Banner from "../../components/ui/Banner";
import ManageClass from "./ManageClass";
import ManageTrainner from "./ManageTrainer";
import ManageMembers from "./ManageMembers";


export default function DashAdmin() {
  const arrClasses = [
    { id: 1, name: "Yoga 1", description: "this is the descoption for Yoga 1", active: "yes", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Regular", capacity:10, location:"In person", media:"http://example.com"},
    { id: 2, name: "Zumba 1", description: "this is the descoption for Zumba 1", active: "no", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Intermedia", capacity:5, location:"Online", media:"http://example.com"},
    { id: 3, name: "Cardio 1", description: "this is the descoption for Cardio 1", active: "yes", start_time: "2025-05-01T00:00", end_time: "2025-08-01T00:00", category:"Advance", capacity:15, location:"In person", media:"http://example.com"}
  ];

  const arrTrainers = [
    { id: 1, first_name:"Bruno", last_name:"Mars", dob: "2000-04-25", email: "brunomars@hotmail.com", phone: "1234567890", password:"mypassword", gender:"male", employee_type: "Yoga", employment_status:"active", salary:3000.50, hour_rate:8, media:"http://example.com", address:"my address"},
    { id: 2, first_name:"Lady", last_name:"Gaga", dob: "1980-03-25", email: "ladygaga@hotmail.com", phone: "1234567890", password:"mypassword", gender:"female", employee_type: "Zumba", employment_status:"active", salary:3000.50, hour_rate:8, media:"http://example.com", address:"my address"},
    { id: 3, first_name:"Elton", last_name:"Jhon", dob: "1980-03-25", email: "eltonjhon@hotmail.com", phone: "1234567890", password:"mypassword", gender:"other", employee_type: "Cardio", employment_status:"active", salary:3000.50, hour_rate:8, media:"http://example.com", address:"my address"}
  ];

  const arrMembers = [
    { id: 1, first_name:"Bruno", last_name:"Mars", dob: "2000-04-25", email: "brunomars@hotmail.com", phone: "1234567890", password:"mypassword", gender:"male", membership:"basic", media:"http://example.com", address:"my address"},
    { id: 2, first_name:"Lady", last_name:"Gaga", dob: "1980-03-25", email: "ladygaga@hotmail.com", phone: "1234567890", password:"mypassword", gender:"female", membership:"gold", media:"http://example.com", address:"my address"},
    { id: 3, first_name:"Elton", last_name:"Jhon", dob: "1980-03-25", email: "eltonjhon@hotmail.com", phone: "1234567890", password:"mypassword", gender:"other", membership:"premium", media:"http://example.com", address:"my address"}
  ];

  return (
    <main className="min-h-screen items-center justify-center">
      <Banner bgImage="/images/pricing-image.webp" title="Admin Dashboard" />
      <ManageClass arrClasses={arrClasses}/>
      <ManageTrainner arrTrainers={arrTrainers}/>
      <ManageMembers arrMembers={arrMembers}/>
    </main>
  );
}
