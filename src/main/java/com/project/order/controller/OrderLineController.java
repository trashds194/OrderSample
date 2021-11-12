package com.project.order.controller;

import com.project.order.dao.OrderLine;
import com.project.order.service.OrderLineService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrderLineController {

    private final OrderLineService orderLineService;

    public OrderLineController(OrderLineService orderLineService) {
        this.orderLineService = orderLineService;
    }

    @PostMapping(value = "/api/order-lines")
    public ResponseEntity<?> create(@RequestBody OrderLine orderLine) {
        final boolean created = orderLineService.create(orderLine);

        return created
                ? new ResponseEntity<>(HttpStatus.CREATED)
                : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/api/order-lines")
    public ResponseEntity<?> read() {
        final List<OrderLine> orderLineList = orderLineService.readAll();

        return orderLineList != null
                ? new ResponseEntity<>(orderLineList, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/api/order-lines/{id}")
    public ResponseEntity<?> read(@PathVariable(name = "id") int id) {
        final OrderLine orderLine = orderLineService.read(id);

        return orderLine != null
                ? new ResponseEntity<>(orderLine, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value = "/api/order-lines/{id}")
    public ResponseEntity<?> update(@PathVariable(name = "id") int id, @RequestBody OrderLine orderLine) {
        final boolean updated = orderLineService.update(orderLine, id);

        return updated
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }

    @DeleteMapping(value = "/api/order-lines/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") int id) {
        final boolean deleted = orderLineService.delete(id);

        return deleted
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }
}
