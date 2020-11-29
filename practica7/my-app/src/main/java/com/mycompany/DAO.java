package com.mycompany;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class DAO {
    private static Conexion conexion=new Conexion();
    
    public static List<Usuarios> dameUsuarios(){
        Statement stm=null;
        Connection con=null;
        ResultSet rs=null;
        List<Usuarios> resultado=new ArrayList<>();

        con =conexion.getConexion();
        try {
            String sql="SELECT * from usuarios";
            stm=con.createStatement();
            rs=stm.executeQuery(sql);
            while(rs.next()){
                Usuarios u=new Usuarios(rs.getString("id"),
                    rs.getString("email"), rs.getString("password"));
                resultado.add(u);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            if (rs!=null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                rs=null;
            }
            if (stm!=null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
                //ojo aqui
                stm=null;
            }
            try {
                con.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return resultado;
    }

    public static String creaUsuarios(Usuarios u){
        PreparedStatement stm=null;
        Connection con=null;
        ResultSet rs=null;
        //List<Usuarios> resultado=new ArrayList<>();
        String msj="";

        con =conexion.getConexion();
        try {
            String sql="insert into usuarios (id,email,password) values(?,?,?)";
            stm=con.prepareStatement(sql);
            stm.setString(1, u.getId());
            stm.setString(2, u.getEmail());
            stm.setString(3, u.getPassword());
            //rs=stm.executeQuery(sql);
            if (stm.executeUpdate()>0) {
                msj="El usuario se agrego correctamente";
            }else{
                msj="No se pudo agregar el usuario";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            if (rs!=null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                rs=null;
            }
            if (stm!=null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
                //ojo aqui
                rs=null;
            }
            try {
                con.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return msj;
    }
}
