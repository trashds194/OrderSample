package com.project.order.service;

import com.project.order.dao.Goods;
import com.project.order.repository.GoodsRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class GoodsServiceImplIntegrationTest {

    @InjectMocks
    private GoodsServiceImpl goodsService;

    @Mock
    private GoodsRepository goodsRepository;

//    @Before
//    public void setUp() {
//        Goods milk = new Goods("milk", 70);
//
//        Mockito.when(goodsRepository.getById(milk.getId()))
//                .thenReturn(milk);
//    }

    @Test
    public void shouldReturnFindAll() {
        List<Goods> goodsList = new ArrayList<>();
        goodsList.add(0, new Goods("milk", 70));

        given(goodsRepository.findAll()).willReturn(goodsList);

        List<Goods> expected = goodsService.readAll();

        assertThat(expected).isEqualTo(goodsList);

    }
}
