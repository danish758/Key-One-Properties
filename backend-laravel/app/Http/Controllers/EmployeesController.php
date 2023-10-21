<?php

namespace App\Http\Controllers;

use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmployeesController extends Controller
{
    //
    public function index(){
        $employees=Employees::all();
        if($employees->count()>0){
            return response()->json([
                "status"=>200,
                "employees"=>$employees
            ],200);
        }else{
            return response()->json([
                "status"=>404,
                "employees"=>"no record found"
            ],404);
        }
    }

    public function store(Request $request){

        $validator=Validator::make($request->all(),[
            "first_name"=>"required|string",
            "last_name"=>"required|string",
            "email"=>"required|email|unique:employees,email",
            "role"=>"required|string",
            "department"=>"required|string",
            "number"=>"required",
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=> $validator->messages()
            ],422);
        }else{
            $employee=Employees::create([
                'first_name'=>$request->first_name,
                'last_name'=>$request->last_name,
                'email'=>$request->email,
                'role'=>$request->role,
                'department'=>$request->department,
                'number'=>$request->number
            ]);
            if($employee){
                return response()->json([
                    'status'=>200,
                    'message'=>'Employee created successfully'
                ],200);
            }else{
                return response()->json([
                    'status'=>500,
                    'message'=>'Something went wrong'
                ],500);
            }
        }
    }

    public function edit(Request $request,int $id){
        $validator=Validator::make($request->all(),[
            "first_name"=>"required|string",
            "last_name"=>"required|string",
            "role"=>"required|string",
            "department"=>"required|string",
            "number"=>"required",
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=> $validator->messages()
            ],422);
        }else{
            $employee=Employees::find($id);
            if($employee){
                $employee->update([
                    'first_name'=>$request->first_name,
                    'last_name'=>$request->last_name,
                    'role'=>$request->role,
                    'department'=>$request->department,
                    'number'=>$request->number
                ]);
                return response()->json([
                    'status'=>200,
                    'message'=>'Employee updated successfully'
                ],200);
            }else{
                return response()->json([
                    'status'=>404,
                    'message'=>'No such employee found!'
                ],404);
            }
        }

        $employee=Employees::find($id);
        if($employee){
            return response()->json([
                'status'=>200,
                'employee'=>$employee
            ],200);
        }else{
            return response()->json([
                'status'=>404,
                'employee'=>"No such employee found!"
            ],404);
        }
    }

    public function login(Request $request){
        $employee = Employees::where('email', $request->email)->first();
        if($employee){
            return response()->json([
                'status'=>200,
                'employee'=>$employee
            ],200);
        }else{
            return response()->json([
                'status'=>404,
                'employee'=>'',
                'error'=>'No such employee found!'
            ],404); 
        }
    }
}
