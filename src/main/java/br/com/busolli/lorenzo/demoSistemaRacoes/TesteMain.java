package br.com.busolli.lorenzo.demoSistemaRacoes;

import org.mindrot.jbcrypt.BCrypt;

public class TesteMain {

    public static void main(String args[]){
        //$2a$10$/.UlDdUzaEsO75pUvMuqX.2wfq0OthzunbqPVb6rvtd0z/HYCfPWa
        System.out.println(BCrypt.hashpw("123456", BCrypt.gensalt()));
        System.out.println(BCrypt.checkpw("123456", "$2a$10$/.UlDdUzaEsO75pUvMuqX.2wfq0OthzunbqPVb6rvtd0z/HYCfPWa"));
    }
}
