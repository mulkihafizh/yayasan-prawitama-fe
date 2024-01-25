import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    if (request.cookies.has("token")) {
      let role = request.cookies.get("role");
      if (role?.value === "payroll_admin") {
        return NextResponse.redirect(new URL("/keuangan", request.url));
      } else if (role?.value === "employee_admin") {
        return NextResponse.redirect(new URL("/kepegawaian", request.url));
      } else {
        return NextResponse.redirect(new URL("/dashboard-guru", request.url));
      }
    }
  }
  if (request.nextUrl.pathname === "/dashboard-guru") {
    if (request.cookies.has("token")) {
      let role = request.cookies.get("role");
      if (role?.value === "payroll_admin") {
        return NextResponse.redirect(new URL("/keuangan", request.url));
      } else if (role?.value === "employee_admin") {
        return NextResponse.redirect(new URL("/kepegawaian", request.url));
      } else {
        return NextResponse.next();
      }
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname === "/keuangan") {
    if (request.cookies.has("token")) {
      let role = request.cookies.get("role");
      if (role?.value === "payroll_admin") {
        return NextResponse.next();
      } else if (role?.value === "employee_admin") {
        return NextResponse.redirect(new URL("/kepegawaian", request.url));
      } else {
        return NextResponse.redirect(new URL("/dashboard-guru", request.url));
      }
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname === "/kepegawaian") {
    if (request.cookies.has("token")) {
      let role = request.cookies.get("role");
      if (role?.value === "payroll_admin") {
        return NextResponse.redirect(new URL("/keuangan", request.url));
      } else if (role?.value === "employee_admin") {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/dashboard-guru", request.url));
      }
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
