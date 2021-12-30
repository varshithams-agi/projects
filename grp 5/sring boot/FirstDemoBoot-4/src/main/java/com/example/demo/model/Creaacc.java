package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="creaacc")
public class Creaacc 
 {
		
		String name;
		@Id
//		@GeneratedValue(strategy= GenerationType.IDENTITY)
		int id;
		String email;
		String phno;
		int balance;
		int accountnumber;
	
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPhno() {
			return phno;
		}
		public void setPhno(String phno) {
			this.phno = phno;
		}
		public int getBalance() {
			return balance;
		}
		public void setBalance(int balance) {
			this.balance = balance;
		}
		public int getAccountnumber() {
			return accountnumber;
		}
		public void setAccountnumber(int accountnumber) {
			this.accountnumber = accountnumber;
		}
		public Creaacc(String name, String email, String phno, int id,int accountnumber,int balance)
		{
			super();
			this.name=name;
			this.email=email;
			this.phno=phno;
			this.id=id;
			this.accountnumber=accountnumber;
			this.balance=balance;
			
		}
		public Creaacc()
		{
		}
		}


