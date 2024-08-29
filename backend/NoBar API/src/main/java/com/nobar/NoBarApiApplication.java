package com.nobar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class NoBarApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(NoBarApiApplication.class, args);
	}

}
