package com.sdk.app.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@RequestMapping("/")
public class UserRegistration {
	
	@RequestMapping(value="/register", method = RequestMethod.POST)
	private void registerUser(HttpServletRequest request, HttpServletResponse response){
		
		try {
			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			JsonNode root = mapper.readTree(request.getReader());
			System.out.println(root);
		} catch (Exception e) {
			e.printStackTrace();
		} 
	}

}
