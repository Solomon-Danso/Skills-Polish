package com.hydottech.Springboot.Tutorial.error;

public class DepartmentNotFoundException extends Exception{

public DepartmentNotFoundException(String message){
    super(message);
}

    public DepartmentNotFoundException(String message, Throwable cause){
        super(message,cause);
    }

    public DepartmentNotFoundException(Throwable cause){
        super(cause);
    }





}
