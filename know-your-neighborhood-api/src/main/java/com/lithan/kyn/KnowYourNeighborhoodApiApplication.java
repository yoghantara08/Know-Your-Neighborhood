package com.lithan.kyn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.lithan.kyn.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class KnowYourNeighborhoodApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(KnowYourNeighborhoodApiApplication.class, args);
	}

}
