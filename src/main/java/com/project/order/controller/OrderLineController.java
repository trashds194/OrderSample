package com.project.order.controller;

import com.project.order.service.OrderLineService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderLineController {

    private final OrderLineService orderLineService;

    public OrderLineController(OrderLineService orderLineService) {
        this.orderLineService = orderLineService;
    }
}
