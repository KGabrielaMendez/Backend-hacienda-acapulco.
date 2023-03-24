import express from "express";

declare global {
  namespace Express {
    interface Request {
      usuario?: Record<string,any>
      estado?: Record<string,any>
      password?: Record<any,any>
      id?: Record<string,any>
    }
  }
}