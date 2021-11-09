package com.project.order.controller;

import com.project.order.service.GoodsService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoodsController {
    private final GoodsService goodsService;

    public GoodsController(GoodsService goodsService) {
        this.goodsService = goodsService;
    }
}
