package com.nocountry.backend.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.nocountry.backend.model.entity.Image;
import com.nocountry.backend.repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

@Service
public class CloudinaryService {

    Cloudinary cloudinary;


    @Autowired
    private IImageRepository imageRepository;
    private Map<String, String> valuesMap = new HashMap<>();

    public CloudinaryService() {
        valuesMap.put("cloud_name", "djto6y6vr");
        valuesMap.put("api_key", "185375437861786");
        valuesMap.put("api_secret", "94hA3fcdmmyDa5HFzxs7vUasbJI");
        cloudinary = new Cloudinary(valuesMap);
    }

    public String upload(MultipartFile multipartFile) {
        Map uploadResult = null;
        try {
            uploadResult = cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.emptyMap());
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return uploadResult.get("secure_url").toString();
    }


    public List<String> uploads(MultipartFile[] multipartFile) {
        List<String> url = new ArrayList<>();
        Arrays.stream(multipartFile).forEach(multipartFile1 ->
                url.add(this.upload(multipartFile1))
        );
        return url;
    }

//    public String upload(MultipartFile multipartFile, String title) {
//        Map options = ObjectUtils.asMap(
//                "original_filename", title);
//        Map uploadResult = null;
//        try {
//            uploadResult = cloudinary.uploader().upload(multipartFile.getBytes(), options);
//        } catch (IOException e) {
//            System.out.println(e.getMessage());
//        }
//        return uploadResult.get("secure_url").toString();
//    }

    public void delete(String publicId) throws IOException {
        cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    }

    private File convert(MultipartFile multipartFile) throws IOException {
        File file = new File(multipartFile.getOriginalFilename());
        try (FileOutputStream fileOutputStream = new FileOutputStream(file)) {
            fileOutputStream.write(multipartFile.getBytes());
            fileOutputStream.close();
        }
        return file;
    }
}
