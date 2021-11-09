package com.project.order.service;

import com.project.order.dao.Order;
import com.project.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public boolean create(Order order) {
        orderRepository.save(order);
        return true;
    }

    @Override
    public List<Order> readAll() {
        return orderRepository.findAll();
    }

    @Override
    public Order read(int id) {
        return orderRepository.getById(id);
    }

    @Override
    public boolean update(Order order, int id) {
        if (orderRepository.existsById(id)) {
            orderRepository.save(order);
            return true;
        } else return false;
    }

    @Override
    public boolean delete(int id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
            return true;
        } else return false;
    }
}
