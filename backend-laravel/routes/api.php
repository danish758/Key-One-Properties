<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('employees',[EmployeesController::class,'index']);
Route::post('employees/login',[EmployeesController::class,'login']);
Route::post('employees',[EmployeesController::class,'store']);
Route::patch('employees/{id}/edit',[EmployeesController::class,'edit']);
