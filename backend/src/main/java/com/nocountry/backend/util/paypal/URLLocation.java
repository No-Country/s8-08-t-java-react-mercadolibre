package com.nocountry.backend.util.paypal;

//import javax.servlet.http.HttpServletRequest;

import jakarta.servlet.http.HttpServletRequest;

public class URLLocation {
    // here just extracting the base url e.g. http://localhost:8080/
    public static String getBaseUrl(HttpServletRequest request) {
        String scheme = request.getScheme();
        String serverName = request.getServerName();
        int serverPort = request.getServerPort();
        String contextPath = request.getContextPath();
        StringBuffer url = new StringBuffer();
        url.append(scheme).append("://").append(serverName);

        if ((serverPort != 80) && (serverPort != 443)) {
            url.append(":").append(serverPort);
        }
        url.append(contextPath);

        if (url.toString().endsWith("/")) {
            url.append("/");
        }
        return url.toString();
    }
}