package com.project.order.service;

import com.project.order.dao.OrderLine;
import com.project.order.repository.OrderLineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderLineServiceImpl implements OrderLineService {

    @Autowired
    private OrderLineRepository orderLineRepository;

    @Override
    public boolean create(OrderLine orderLine) {
        orderLineRepository.save(orderLine);
        return true;
    }

    @Override
    public List<OrderLine> readAll() {
        return orderLineRepository.findAll();
    }

    @Override
    public OrderLine read(int id) {
        return orderLineRepository.getById(id);
    }

    @Override
    public boolean update(OrderLine orderLine, int id) {
        if (orderLineRepository.existsById(id)) {
            orderLineRepository.save(orderLine);
            return true;
        } else return false;
    }

    @Override
    public boolean delete(int id) {
        if (orderLineRepository.existsById(id)) {
            orderLineRepository.deleteById(id);
            return true;
        } else return false;
    }
}
