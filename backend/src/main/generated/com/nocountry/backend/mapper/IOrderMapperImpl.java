package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.order.OrderDto;
import com.nocountry.backend.dto.shippingMethod.ShippingMethodDto;
import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.model.entity.Order;
import com.nocountry.backend.model.entity.ShippingMethod;
import com.nocountry.backend.model.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-23T13:42:08-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.4.1 (Eclipse Adoptium)"
)
@Component
public class IOrderMapperImpl implements IOrderMapper {

    @Autowired
    private IUserMapper iUserMapper;
    @Autowired
    private IOrderStatusMapper iOrderStatusMapper;

    @Override
    public OrderDto toOrderDto(Order order) {
        if ( order == null ) {
            return null;
        }

        OrderDto.OrderDtoBuilder orderDto = OrderDto.builder();

        orderDto.id( order.getId() );
        orderDto.date( order.getDate() );
        orderDto.user( iUserMapper.toUserDto( order.getUser() ) );
        orderDto.orderTotal( order.getOrderTotal() );
        orderDto.shippingMethod( shippingMethodToShippingMethodDto( order.getShippingMethod() ) );
        orderDto.orderStatus( iOrderStatusMapper.toOrderStatusDto( order.getOrderStatus() ) );

        return orderDto.build();
    }

    @Override
    public Order toOrder(OrderDto DTO) {
        if ( DTO == null ) {
            return null;
        }

        Order.OrderBuilder order = Order.builder();

        order.id( DTO.getId() );
        order.date( DTO.getDate() );
        order.user( userDtoToUser( DTO.getUser() ) );
        order.orderTotal( DTO.getOrderTotal() );
        order.shippingMethod( shippingMethodDtoToShippingMethod( DTO.getShippingMethod() ) );
        order.orderStatus( iOrderStatusMapper.toOrderStatus( DTO.getOrderStatus() ) );

        return order.build();
    }

    @Override
    public List<OrderDto> toOrderDTO(List<Order> orders) {
        if ( orders == null ) {
            return null;
        }

        List<OrderDto> list = new ArrayList<OrderDto>( orders.size() );
        for ( Order order : orders ) {
            list.add( toOrderDto( order ) );
        }

        return list;
    }

    @Override
    public List<Order> toOrders(List<OrderDto> ordersDTO) {
        if ( ordersDTO == null ) {
            return null;
        }

        List<Order> list = new ArrayList<Order>( ordersDTO.size() );
        for ( OrderDto orderDto : ordersDTO ) {
            list.add( toOrder( orderDto ) );
        }

        return list;
    }

    protected ShippingMethodDto shippingMethodToShippingMethodDto(ShippingMethod shippingMethod) {
        if ( shippingMethod == null ) {
            return null;
        }

        ShippingMethodDto shippingMethodDto = new ShippingMethodDto();

        shippingMethodDto.setId( String.valueOf( shippingMethod.getId() ) );
        shippingMethodDto.setName( shippingMethod.getName() );
        shippingMethodDto.setPrice( shippingMethod.getPrice() );

        return shippingMethodDto;
    }

    protected User userDtoToUser(UserDto userDto) {
        if ( userDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.id( userDto.getId() );
        user.email( userDto.getEmail() );
        user.firstName( userDto.getFirstName() );
        user.lastName( userDto.getLastName() );
        user.numberPhone( userDto.getNumberPhone() );

        return user.build();
    }

    protected ShippingMethod shippingMethodDtoToShippingMethod(ShippingMethodDto shippingMethodDto) {
        if ( shippingMethodDto == null ) {
            return null;
        }

        ShippingMethod.ShippingMethodBuilder shippingMethod = ShippingMethod.builder();

        if ( shippingMethodDto.getId() != null ) {
            shippingMethod.id( Integer.parseInt( shippingMethodDto.getId() ) );
        }
        shippingMethod.name( shippingMethodDto.getName() );
        shippingMethod.price( shippingMethodDto.getPrice() );

        return shippingMethod.build();
    }
}
