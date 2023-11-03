import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    if (request.cookies.has("token")) {
      let role = request.cookies.get("role");
      if (role?.value === "payroll_admin") {
        return NextResponse.redirect(
          new URL("/Dashboard-Keuangan", request.url)
        );
      } else if (role?.value === "employee_admin") {
        return NextResponse.redirect(
          new URL("/Dashboard-Kepegawaian", request.url)
        );
      } else {
        return NextResponse.redirect(new URL("/Dashboard-Guru", request.url));
      }
    }
  }
  if (request.nextUrl.pathname === "/Dashboard-Guru") {
    if (request.cookies.has("token")) {
      let role = request.cookies.get("role");
      if (role?.value === "payroll_admin") {
        return NextResponse.redirect(
          new URL("/Dashboard-Keuangan", request.url)
        );
      } else if (role?.value === "employee_admin") {
        return NextResponse.redirect(
          new URL("/Dashboard-Kepegawaian", request.url)
        );
      } else {
        return NextResponse.next();
      }
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname === "/Dashboard-Keuangan") {
    if (request.cookies.has("token")) {
      let role = request.cookies.get("role");
      if (role?.value === "payroll_admin") {
        return NextResponse.next();
      } else if (role?.value === "employee_admin") {
        return NextResponse.redirect(
          new URL("/Dashboard-Kepegawaian", request.url)
        );
      } else {
        return NextResponse.redirect(new URL("/Dashboard-Guru", request.url));
      }
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname === "/Dashboard-Kepegawaian") {
    if (request.cookies.has("token")) {
      let role = request.cookies.get("role");
      if (role?.value === "payroll_admin") {
        return NextResponse.redirect(
          new URL("/Dashboard-Keuangan", request.url)
        );
      } else if (role?.value === "employee_admin") {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/Dashboard-Guru", request.url));
      }
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
