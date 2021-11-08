package com.project.order.service;

import com.project.order.dao.OrderLine;

import java.util.List;

public interface OrderLineService {
    boolean create(OrderLine orderLine);

    List<OrderLine> readAll();

    OrderLine read(int id);

    boolean update(OrderLine orderLine, int id);

    boolean delete(int id);
}
