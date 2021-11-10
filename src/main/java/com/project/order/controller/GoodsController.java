package com.project.order.controller;

import com.project.order.dao.Goods;
import com.project.order.service.GoodsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GoodsController {
    private final GoodsService goodsService;

    public GoodsController(GoodsService goodsService) {
        this.goodsService = goodsService;
    }

    @PostMapping(value = "/api/goods")
    public ResponseEntity<?> create(@RequestBody Goods goods) {
        final boolean created = goodsService.create(goods);

        return created
                ? new ResponseEntity<>(HttpStatus.CREATED)
                : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/api/goods")
    public ResponseEntity<?> read() {
        final List<Goods> goodsList = goodsService.readAll();

        return goodsList != null
                ? new ResponseEntity<>(goodsList,HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/api/goods/{id}")
    public ResponseEntity<?> read(@PathVariable(name = "id") int id) {
        final Goods goods = goodsService.read(id);

        return goods != null
                ? new ResponseEntity<>(goods, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value = "/api/goods/{id}")
    public ResponseEntity<?> update(@PathVariable(name = "id") int id, Goods goods) {
        final boolean updated = goodsService.update(goods, id);

        return updated
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }

    @DeleteMapping(value = "/api/goods/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") int id) {
        final boolean deleted = goodsService.delete(id);

        return deleted
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }
}
