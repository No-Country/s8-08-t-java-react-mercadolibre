package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.orderStatus.OrderStatusDto;
import com.nocountry.backend.model.entity.OrderStatus;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-23T13:42:08-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.4.1 (Eclipse Adoptium)"
)
@Component
public class IOrderStatusMapperImpl implements IOrderStatusMapper {

    @Override
    public OrderStatusDto toOrderStatusDto(OrderStatus orderStatus) {
        if ( orderStatus == null ) {
            return null;
        }

        OrderStatusDto orderStatusDto = new OrderStatusDto();

        orderStatusDto.setId( String.valueOf( orderStatus.getId() ) );
        orderStatusDto.setStatus( orderStatus.getStatus() );

        return orderStatusDto;
    }

    @Override
    public OrderStatus toOrderStatus(OrderStatusDto DTO) {
        if ( DTO == null ) {
            return null;
        }

        OrderStatus.OrderStatusBuilder orderStatus = OrderStatus.builder();

        if ( DTO.getId() != null ) {
            orderStatus.id( Integer.parseInt( DTO.getId() ) );
        }
        orderStatus.status( DTO.getStatus() );

        return orderStatus.build();
    }

    @Override
    public List<OrderStatusDto> toOrderStatusDTO(List<OrderStatus> orderStatus) {
        if ( orderStatus == null ) {
            return null;
        }

        List<OrderStatusDto> list = new ArrayList<OrderStatusDto>( orderStatus.size() );
        for ( OrderStatus orderStatus1 : orderStatus ) {
            list.add( toOrderStatusDto( orderStatus1 ) );
        }

        return list;
    }

    @Override
    public List<OrderStatus> toOrderStatus(List<OrderStatusDto> orderStatusDTO) {
        if ( orderStatusDTO == null ) {
            return null;
        }

        List<OrderStatus> list = new ArrayList<OrderStatus>( orderStatusDTO.size() );
        for ( OrderStatusDto orderStatusDto : orderStatusDTO ) {
            list.add( toOrderStatus( orderStatusDto ) );
        }

        return list;
    }
}
