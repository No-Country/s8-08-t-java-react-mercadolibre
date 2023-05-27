package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.product.ImageDTO;
import com.nocountry.backend.model.entity.Image;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.factory.Mappers;

import java.util.List;


    @Mapper(componentModel = "spring", uses = {}, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    public interface IImageMapper {
        IImageMapper INSTANCE = Mappers.getMapper(IImageMapper.class);
        ImageDTO toImageDto(Image imagey);

        Image toImage(ImageDTO DTO);

        List<ImageDTO> toImagesDTO(List<Image> images);

        List<Image> toImages(List<ImageDTO> imagesDTO);
    }


