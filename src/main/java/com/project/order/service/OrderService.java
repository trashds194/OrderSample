package com.project.order.service;

import com.project.order.dao.Order;

import java.util.List;

public interface OrderService {
    boolean create(Order order);

    List<Order> readAll();

    Order read(int id);

    boolean update(Order order, int id);

    boolean delete(int id);
}
